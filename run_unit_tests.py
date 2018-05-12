import sys
sys.path.append("./server/rest")
sys.path.append("./server/")

import server.rest.zillowCollector_test as zillowTest
import server.rest.yelp_test as yelpTest
import server.csvreader_test as csvTest

def main():
    zillowTest.TestCitiesRoute()
    yelpTest.TestYelpHappy()
    yelpTest.TestYelpUnhappy()
    csvTest.TestCsvReaderHappy()
    csvTest.TestCsvReaderUnhappy()
main()
