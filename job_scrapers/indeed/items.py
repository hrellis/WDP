# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

from scrapy.item import Item, Field

class JobItem(Item):
	title = Field()
	employer = Field()
	location = Field()
	link = Field()
	desc = Field()
	industry = Field()
	long = Field()
	lat = Field()
	date_time = Field()	
	part_time = Field()