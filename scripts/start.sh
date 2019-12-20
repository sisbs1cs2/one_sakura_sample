#!/bin/bash 
 
rm -rf /opt/yproject/scripts 
rm -f /opt/yproject/appspec.yml 
forever start /opt/yproject/bin/www 
