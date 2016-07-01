class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one :profile

  before_create do |user|
  	user.api_key = user.generate_api_key
  end

  def generate_api_key
  	loop do
  		token = SecureRandom.base64
  		break token unless User.exists?(api_key: token)
  	end
  end
end
