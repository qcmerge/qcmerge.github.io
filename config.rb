require 'compass'

# Methods defined in the helpers block are available in templates
helpers do
  
  # Calculate the years for a copyright
  def copyright_years(start_year)
    end_year = Date.today.year
    if start_year == end_year
      start_year.to_s
    else
      start_year.to_s + '-' + end_year.to_s
    end
  end
  
  def active_class(section)
    'active' if current_page.data.section.eql?(section)
  end
  
end

page "*", :layout => "public"

ignore 'source'