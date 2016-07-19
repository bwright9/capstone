class Profile < ActiveRecord::Base
  belongs_to :user
  has_one :move_preference
  has_one :visit_preference

  def full_street_address
		[address, current_city, current_state].compact.join(', ')
	end

  geocoded_by :full_street_address
	after_validation :geocode  
end
