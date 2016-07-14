class AddAddressToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :address, :string
  end
end
