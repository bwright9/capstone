class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :profile
  after_create :create_profile

  before_create do |user|
    user.api_key = user.generate_api_key
  end

  def self.from_third_party_auth(provider, auth)
      name_arr = auth[:name].split(' ')
      where(provider: provider, uid: auth[:userID], first_name: name_arr.first, last_name: name_arr.last).first_or_create do |user|
      user.email = auth[:email]
      user.password = Devise.friendly_token
    end
  end

  def generate_api_key
  	loop do
  		token = SecureRandom.base64
  		break token unless User.exists?(api_key: token)
  	end
  end

  def create_profile
    self.profile = Profile.create
  end
end
