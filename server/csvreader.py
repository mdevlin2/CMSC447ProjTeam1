# Author: Cassidy Crouse
# Last Updated: 5/8/2018 5:32 PM

# Python CSV module, see documentation online for details
import csv

# Function to read the population and population density from a row in a csv file. The county,
# state, and city values in the csv are primary keys for a tuple. With these three values, population
# and populationDensity can be found. If the population and population density cannot be found, return a
# value that makes it clear that this tuple does not exist in the csv.
# Input:
# - state value (string)
# - county value (string)
# - city value (string)
# Output:
# - population and population density (string)
def readPopulation(state, county, city):
	# convert the input values to strings
	state = str(state)
	county = str(county)
	city = str(city)

	# read the csv and convert it to a list
	with open('municipalities.csv', 'r') as csvfile:
		populationReader = csv.reader(csvfile, delimiter=',')
		csvList = list(populationReader)

		# The list will be in the following format:
		# [['state','name','county','population','populationDensity'],...]
		# so to find population and populationDenisty just check where the row contains
		# all three of the input values.

		population = "-1"
		populationDenisty = "-1"
		i = 0

		# check where the row contains all three of the input values
		for row in csvList:
			# ignore the first row because it is the column headers
			if(i == 0):
				i += 1
			else:
				if (row[0] == state) and (row[2] == county) and (row[1] == city):
					population = row[3]
					populationDensity = row[4]
					break

		# if population and populationDensity could be found, make a comma separated pair of the two
		# if not, return -1,-1 to symbolize that the values could not be found
		if (population != '-1') and (populationDensity != '-1'):
			return population + ',' + populationDensity
		else:
			return '-1,-1'

# Function to find all cities located in a county. If the county given does not exist, return
# something that will make it clear that the input is invalid.
# Input:
# - state value (string)
# - county value (string)
# Output:
# - cities (string)
def readCities(state, county):
	# convert the input values to strings
	state = str(state)
	county = str(county)

	# read the csv and convert it to a list
	with open('municipalities.csv', 'r') as csvfile:
		populationReader = csv.reader(csvfile, delimiter=',')
		csvList = list(populationReader)

		cities = '-1'
		i = 0
		j = 0

		# The list will be in the following format:
		# [['state','name','county','population','populationDensity'],...]
		# so to find population and populationDenisty just check where the row contains
		# both of the input values.

		# find the rows with the input county value
		for row in csvList:
			# ignore the first row because it is the column headers
			if j == 0:
				j += 1
			else:
				if(row[2] == county):
					# if this city is the first value, no comma
					if(i == 0):
						cities = row[1]
						i += 1
					# add commas between every other value
					else:
						cities = cities + ',' + row[1]
						i += 1
		# if nothing was found this will be '-1'
		return cities

# Function to find population and population density for a given state and county. If the county
# does not exist something will be returned to make it clear that it is not in the list.
# Input:
# - state value (string)
# - county value (string)
# Output:
# - population and population density (string)
def readCounties(state, county):
	# convert the input values to strings
	state = str(state)
	county = str(county)

	# The list will be in the following format:
	# [['state','county','population','area','populationDensity'],...]
	# so to find population and populationDenisty just check where the row contains
	# all three of the input values.

	# read the csv and convert it to a list
	with open('counties.csv', 'r') as csvfile:
		populationReader = csv.reader(csvfile, delimiter=',')
		csvList = list(populationReader)

		i = 0
		population = '-1'
		populationDenisty = '-1'

		# check where the row contains both of the input values
		for row in csvList:
			# ignore the first row because it is the column headers
			if(i == 0):
				i += 1
			else:
				if (row[0] == state) and (row[1] == county):
					population = row[2]
					populationDensity = row[4]
					break

		# if population and populationDensity could be found, make a comma separated pair of the two
		# if not, return -1,-1 to symbolize that the values could not be found
		if (population != '-1') and (populationDensity != '-1'):
			return population + ',' + populationDensity
		else:
			return '-1,-1'


# Testing for readPopulation, readCities, and readCounties
def main():

	# Test that my method for opening the csv is correct:
	with open('municipalities.csv', 'r') as csvfile:
		populationReader = csv.reader(csvfile, delimiter=',')
		# for row in populationReader:
			#print ''.join(row)

		# Test that my list conversion is correct:
		# csvList = list(populationReader)

		# for row in csvList:
		# 	for col in row:
		# 		#print col

		# Test valid case
		valid = readPopulation('Maryland','Harford','Aberdeen')
		print(valid)

		# Test invalid case
		invalid = readPopulation('-1','-1','-1')
		print(invalid)

		# Test valid case
		valid = readCities('Maryland','Frederick')
		print(valid)

		# Test invalid case
		invalid = readCities('-1','-1')
		print(invalid)

		# Test valid case
		valid = readCounties('Maryland','Frederick')
		print(valid)

		# Test invalid case
		invalid = readCounties('-1','-1')
		print(invalid)
main()
