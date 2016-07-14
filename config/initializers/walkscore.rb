if Rails.env.development?
    YAML.load(File.read('config/walkscore.yml')).each do |key, value|
        ENV[key] = value
    end
end