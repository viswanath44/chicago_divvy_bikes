# Final Project Repository

STORY

	My story is about the spread of Chicago Divvy Bicycle Stations across Chicago from 2013 to 2022 (February).
	It also includes a line chart showing the increase/ decrease in number of stations each year.
	A grouped bar chart showing the increase/ decrease in rides per region (Central, North, South and West) in each year.
	
--------------------------------------------------------------------------------------------------

Below is the description of the files/ folders in this project:

 I have downloaded the data from official Divvy bike website (https://divvy-tripdata.s3.amazonaws.com/index.html)

REQUIRED DIRECTORY STRUCTURE

Data/
	2013 / *.csv
	2014 / *.csv
	2015 / *.csv
	2016 / *.csv
	2017 / *.csv
	2018 / *.csv
	2019 / *.csv
	2020 / *.csv
	2021 / *.csv
	2022 / *.csv	
	
After extracting the zip files of each year, there are some csv files which have the stations information. 
They do not need to be included in the above directory structure. Only the files with the data need to be added.

MERGING ALL STATIONS WITH COORDINATES
	Some of the stations were removed every year.
	I have downloaded the latest stations data and have included in the repository in the folder "Latest_stations_coordinates_data".
		(downloaded from google)
	The old stations csv files are included in the folder "Old_stations_coordinates_data". It contains information of the stations
		that were present(active during) in 2014 to 2017. (named as Divvy_Stations_20**_Q*)
		(These files were found in the zip file (official divvy provided data) after extracting the zip file.)
	In order to merge them along with the coordinates, execute the "All stations merged list with coordinates.ipynb' file which	
		will produce a "final_stations.csv" file in the current working directory.
	The final_stations.csv file is used for mapping coordinates for every year's data where the new stations get added.


YEARWISE Exploratory Data Analysis (EDA)
	This folder contains the individual years' data cleaning and mapping of coordinates for every station and plotting of
		folium maps with the respective years locations.
		
LEGEND CREATION USING D3JS
	I have created a legend image that is added to the folium map using d3js.
	The html, css and js files are incuded in the folder.
	
LEGEND_IMAGES
	This folder contains the legend images that are added to the final folium map's individual yearwise data.
	
PATHS FOR READING EACH CSV FILE.IPYNB
	This is for better understanding of the directory structure that is mentioned above.
	Only the files that I have used in the Data/20** (yearwise) data paths are mentioned.

GITIGNORE
	I have added the Data/20**/*.csv in the Gitignore file.

SPREAD OF DIVVY BIKES_V2.IPYNB 
	This generates the required output GIF file and also displays in the Jupyter notebook.
	
	REQUIRED LIBRARIES/ PACKAGES TO RUN THIS FILE:
		import os                             # to get the current working directory information
		import shutil                         # to remove some of the files created
		import time                           # for adding the delay while taking a screenshot from the browser
							
		import imageio                        # to convert the image files into GIF format
		import webbrowser                     # for displaying the html file in a web browser when map is saved
		import fileinput                      # for taking input of all the png files and converting to gif

		import numpy as np                    # importing numpy
		import pandas as pd                   # importing pandas

		from os import path                   # to get the path of the current working directory which is required for creating png files
		from branca.colormap import linear    # utility module for color maps
		from selenium import webdriver        # required for working with web browsers (used for communicating between browser and prog languages)
		from PIL import Image                 # library for editing of images (Editing the screenshot to required size)
		from pathlib import Path              # required for getting the path of the final gif file and displaying it

		from glob import glob                 # for deleting all the png and html files that are created (returns the matching name patterns)
		import folium                         # for creating the interactive map (using geospatial data)
		from folium import plugins            # using leaflet in the background
		from folium.plugins import HeatMap    # for creating a heat map in folium
		from folium.plugins import FloatImage # for adding the legend on the map
	
	REQUIRED EXECUTABLES
		webdriver
			I have used chrome(Windows OS) and have incuded the chromedriver.exe in the repository.
			Depending on the platform, the respective executable selenium webdriver needs to be downloaded.
			This executable needs to be in the same folder as the "Spread of divvy bikes_final.ipynb".
			This is where the images will be saved from the browser and the final output is saved.
			
	OVERVIEW OF THE RUNNING CODE IN THE IPYNB FILE:
		1. Loading the above generated "final_stations.csv" file and converting into a dictionary "locations" with
			key : "Station name" and value : "{latitude, longitude}".
		2. Creating an empty map for the stations in 2012 using folium and labelling it accordingly.
		3. Creating a map for every year from 2013 to 2022.
			- Load the csv file and concat if necessary.
			- Save all the unique stations in allSt** (** ranging from 13 to 22 as per the year).
			- Compare with the dict locations & map all the stations with coordinates.
			- Converting it into dataframe and renaming the Station name column.
			- Adding a color column for that particular year's stations in the dataframe and adding a hex value of color.
			- Merging the dataframe if there are any previous year's data.
		4. Creating a map using folium.
			- Adding an empty map with tiles as "cartobd positron" which is dull in color which helps in representing the 
				colors effectively.
			- Adding an appropriate title for each year.
			- Defining a function which plots using circle marker and passing data to the function.
		5. Adding a legend which displays the year that is being added in that particular year.
			- Created the legend using d3js (Code added in the repository).
			- Took a screenshot of the generated image manually.
			- Edited the legends per year and added to the folder "Legend_images".
			- Uses a FloatImage function from folium to be displayed on the map generated as an image.
		6. Saving the map as html file.
		7. Disabling the zoom control of the map.
		8. Using the webdriver and the browser and taking a screenshot programatically.
		9. Cropping the image to required height and width to display properly.
		10. Using all the cropped images and converting them into GIF programatically.
		11. Removing all the html and png files that have been generated.
		12. Loading the GIF file into Jupyter notebook to display the resulting visualization.
		
SPREAD OF DIVVY STATIONS ACROSS YEARS.GIF	
	This is the generated output file which is the final single image visualization.
	
	
LINE CHART
		This contains the values of the number of added stations per each year.
		

	
------------------------------------------------------------------------------------------------

CHICAGO DIVISIONS LAT AND LONG.TXT
	
	Manually calculated the values of each region of Chicago which are Central, North, South and West (West and southwest together.)
	This file contains all the latitude and longitude values for the chicago regions.
	

------------------------------------------------------------------------------------------------

AFTER REVIEW_REGIONS BAR CHART

	Created a grouped bar chart region wise per each year
	
------------------------------------------------------------------------------------------------

NEW CHICAGO DIVISIONS
OLD CHICAGO DIVISIONS

	Images downloaded from web for the divisions of Chicago.
	
------------------------------------------------------------------------------------------------

FINALIMAGE.GIF

	This gif has all of the visualizations merged together and is played as an animation which tells my story.
	I have merged all the different obtained visualizations in photoeditor and created a GIF using finalimage GIF generation.ipynb.

