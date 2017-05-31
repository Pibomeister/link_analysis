import csv
import json

csvfile = open('sabana2.csv', 'r')
jsonfile = open('sabana2.json', 'w')

fieldnames = ("StartDate","SideB","Incomming","ForwardedNumber", "CallOrigin", "Description", "Duration", "CellSiteId", "SeviceDescription","Adress", "id" )
reader = csv.DictReader( csvfile, fieldnames)
out = json.dumps( [ row for row in reader ] )
jsonfile.write(out)