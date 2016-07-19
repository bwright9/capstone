class SignupMailer < ApplicationMailer
 

 	include SendGrid
 	default from: ENV['MAIL_FROM']


	def new_signup(user)
	  @user = user
	  @name = user.first_name
	  mail(to: @user.email, subject: 'Welcome!')
	end
end

