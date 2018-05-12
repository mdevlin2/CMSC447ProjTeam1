import csvreader as reader

def fail(msg):
    print("*"*10)
    print("*** csvReader UNIT TEST FAILED *** ")
    print("***", msg)
    print("*"*10)

def success():
    print("*"*10)
    print("*** csvReader UNIT TEST PASSED *** ")
    print("*"*10)


# checks to make sure valid input does not return invalid output
def TestCsvReaderHappy():
    valid = reader.readPopulation('Maryland','Harford','Aberdeen')
    data = valid.split(",")
    if data[0] == "-1":
        fail("population should not -1")
        return
    if data[1] == "-1":
        fail("population density should not -1")
        return
    success()


# checks to make sure invalid input returns invalid output
def TestCsvReaderUnhappy():
    valid = reader.readPopulation("", "", "")
    data = valid.split(",")
    if not data[0] == "-1":
        fail("population should be -1")
        return
    if not data[1] == "-1":
        fail("population density should be -1")
        return
    success()

TestCsvReaderUnhappy()
