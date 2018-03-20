from gensim.summarization import summarize, keywords
import logging, requests, os
import nltk
from nltk.tokenize import word_tokenize, sent_tokenize

logging.basicConfig(format='%(asctime)s : %(levelname)s : %(message)s', level=logging.INFO)

content = ""

with open('/home/adi-sin/Desktop/Namastey/data', 'r') as content_file:
    content = content_file.read()
    
   
#print(content)
#print ('Summary:')
sumr = summarize(content)
kw = keywords(content)
nl = "\n"

#print (keywords(content))
	
with open('/home/adi-sin/Desktop/Namastey/summary', 'w') as f:
	f.write(sumr)
	f.write(nl)
	f.write(nl)
	f.write(kw)




