import json

import httplib2
import httplib
headers = {"Content-type"}

class Firebase(object):
    def __init__(self, base_url):
        self.base_url = base_url
        pass

    # get information from firebase
    def get(self, reference=None):
        connection = httplib.HTTPSConnection(self.base_url)
        if reference != None:
            connection.request('GET', reference + '.json')
        else:
            connection.request('GET', '.json')
        connection_status = connection.getresponse()
        return json.loads(connection_status.read())

    def push(self, data, reference=None):
        push_data = json.dumps(data)
        connection = httplib.HTTPSConnection(self.base_url)
        if reference != None:
            connection.request('POST', reference + '.json', body=push_data)
            print 'reference was called'
        else:
            connection.request('POST', '.json', body=push_data)
        connection_status = connection.getresponse()
        print 'ref not called'
        print connection_status.reason, "REASON", connection_status.status
        print type(connection_status), 'CONNECTION STATUS'
        print connection_status.read(), 'READ'
        return connection_status.read()

