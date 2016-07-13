class Profile < ActiveRecord::Base
  belongs_to :user
  has_one :move_preference
  has_one :visit_preference
end
