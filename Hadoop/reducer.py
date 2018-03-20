#!/usr/bin/python
from operator import itemgetter
import sys



data_file=open("/home/adi-sin/Desktop/itday1/data", "w")
data_file2=open("/home/adi-sin/Desktop/itday1/data2", "w")



current_word = None
#current_count = 0
word = None
text = '"feedback":'
query = '"query":'


fbnsgn = []
qa = []

# input comes from STDIN
for line in sys.stdin:
    # remove leading and trailing whitespace
    line = line.strip()

    # parse the input we got from mapper.py
    word = line.split(',')

    for sent in word:

        if text in sent:
        	print(sent)
        	fbnsgn.append(sent)

        elif query in sent:
            print(query)
            qa.append(sent)    

            
        	
        	 

for item in fbnsgn:
    data_file.write("%s\n" % item)      

for item in qa:
    data_file2.write("%s\n" % item)               	

    

     
            



    



