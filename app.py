import argparse
import base64
import json
import os

import cStringIO
import urllib
from PIL import Image

from oauth2client.client import GoogleCredentials

from googleapiclient import discovery

from firebase.firebase import Firebase
from flask import Flask

# create object Flask object
app = Flask(__name__)
DISCOVERY_URL = 'https://{api}.googleapis.com/$discovery/rest?version={apiVersion}'
firebase = Firebase('zika-virus-18f6f.firebaseio.com')
storage_list = [
    'gs://carbide-crowbar-135319.appspot.com/many-water-buckets.jpg',
    'gs://carbide-crowbar-135319.appspot.com/puddle.jpg',
    'gs://carbide-crowbar-135319.appspot.com/stagnant-water.jpeg',
    'gs://carbide-crowbar-135319.appspot.com/water-body.jpg',
    'gs://carbide-crowbar-135319.appspot.com/nasty-water.jpg',
    'gs://carbide-crowbar-135319.appspot.com/sandy-water-buckets.jpg'
]
with open("hawkeye.json", mode='r') as GOOGLE_APPLICATION_CREDENTIALS:
    json_object = json.load(GOOGLE_APPLICATION_CREDENTIALS)
    json_string = str(json_object)


@app.route('/')
def label():
    credentials = GoogleCredentials.from_stream('hawkeye.json')
    service = discovery.build('vision', 'v1',
                              credentials=credentials,
                              discoveryServiceUrl=DISCOVERY_URL)

    for item in storage_list:
        print item
        service_requesst = service.images().annotate(body={

            'requests': [
                {
                    'image': {
                        'source':
                            {
                                'gcsImageUri': item
                            }

                    },
                    'features': [{
                        'type': 'LABEL_DETECTION',

                    }]
                }]
        })
        response = service_requesst.execute()

        # push the number of responses to git in individual fields
        for item , value in response['responses'][0].iteritems():
            print item, 'ITEM', value, 'VALUE'
            
            firebase.push({item: value}, reference='/images')
            print response

    return 'PHOTO'


if __name__ == '__main__':
    app.run(debug=True)
