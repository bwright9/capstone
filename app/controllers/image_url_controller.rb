class ImageUrlController < ApplicationController
  def get_image
    images = {}
    params[:images].each do |img|
      images[img.gsub('.jpg', '')] = ActionController::Base.helpers.image_url(img)
    end
    render json: images
  end
end
