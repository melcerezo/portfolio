import boto3
from botocore.client import Config
import zipfile
from io import BytesIO
import mimetypes

def lambda_handler(event, context):

    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    sns = boto3.resource("sns")
    topic = sns.Topic('arn:aws:sns:us-east-1:015596371271:deployPortfolioTopic')


    portfolio_bucket = s3.Bucket('portfolio.melcerezo.com')
    build_bucket = s3.Bucket('portfoliobuild.melcerezo.com')

    portfolio_zip =  BytesIO()
    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm,
                ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            # portfolio_bucket.Object(nm).Acl().put(ACL='public_read')
            # ACL not needed as bucket policy is public

    print("Job Done!")
    topic.publish(Subject="Test Number 2", Message="Portfolio deployed successfully!")
