require 'date'

#get layout
#puts "Is this a poem, narrative or drama?"
type = "narrative"

#get title
puts "Please enter the full title of the composition"
title = gets
title2 = title.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

#get author
puts "Please enter the author"
author = gets

#get body of work
puts "Enter the body of text"
texts = gets

current_date = Date.today
current_date.strftime("%Y-%m-%d")
current_date.to_s

source = "#{current_date}" + "-" + title2

f  = File.new("/_posts/" + source + ".md", "w")
f.puts("---")
f.puts("layout: " + type)
f.puts("title: "  + %Q{"#{title}"})
f.puts("author: " + author)
f.puts("---")

#default conditions
f.puts(%Q|<a id="title-page" />|)

#write text
f.puts(texts)


f.close
