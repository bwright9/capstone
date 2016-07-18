class Profile < ActiveRecord::Base
  belongs_to :user
  has_one :move_preference
  has_one :visit_preference
  after_create :create_visit_prefs

  def full_street_address
		[address, current_city, current_state].compact.join(', ')
	end

	def create_visit_prefs
		self.visit_preference = VisitPreference.create
	end

  geocoded_by :full_street_address
	after_validation :geocode  
end
