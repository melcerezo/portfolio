import boto3
from botocore.client import Config
import zipfile
from io import BytesIO
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource("sns")
    topic = sns.Topic('arn:aws:sns:us-east-1:015596371271:deployPortfolioTopic')
    location = {
            "bucketName": 'portfoliobuild.melcerezo.com',
            "objectKey":  'portfoliobuild.zip'
    }

    try:
        job = event.get("CodePipeline.job")


        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "BuildArtifact":
                    location = artifact["location"]["s3Location"]

        print("Building Portfolio from " + str(location))
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))


        portfolio_bucket = s3.Bucket('portfolio.melcerezo.com')
        build_bucket = s3.Bucket(location["bucketName"])

        portfolio_zip =  BytesIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                mimetype = mimetypes.guess_type(nm)[0]
                portfolio_bucket.upload_fileobj(obj, nm,
                    ExtraArgs={'ContentType': str(mime_type)})
                # portfolio_bucket.Object(nm).Acl().put(ACL='public_read')
                # ACL not needed as bucket policy is public

        print("Job Done!")
        topic.publish(Subject="Portfolio Deploy", Message="Portfolio deployed successfully!")
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        topic.publish(Subject="Portfolio Deploy Failed", Message="Portfolio was not deployed successfully.")
        raise


    return "Lambda Ran!"
