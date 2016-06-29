class CreateMovePreferences < ActiveRecord::Migration
  def change
    create_table :move_preferences do |t|
      t.boolean :rent
      t.boolean :buy
      t.integer :housing_costs
      t.boolean :school_ratings
      t.integer :median_age
      t.boolean :safety
      t.boolean :restaurants
      t.boolean :arts_culture
      t.boolean :shopping
      t.boolean :parks_nature
      t.boolean :nightlife
      t.boolean :walk_score
      t.belongs_to :profile, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
