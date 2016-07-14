class AddWalkscoreToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :walkscore, :integer
  end
end
