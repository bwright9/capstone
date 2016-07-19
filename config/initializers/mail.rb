begin
 mail = "#{Rails.root}/config/mail.yml"
 YAML.load_file(mail).each do |key, value|
   ENV[key] = value
 end
rescue
 raise "No mail.yml config file in your config directory."
end