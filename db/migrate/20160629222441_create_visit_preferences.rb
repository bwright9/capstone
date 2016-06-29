class CreateVisitPreferences < ActiveRecord::Migration
  def change
    create_table :visit_preferences do |t|
      t.boolean :nightlife
      t.boolean :safety
      t.boolean :restaurants
      t.boolean :arts_culture
      t.boolean :shopping
      t.boolean :parks_nature
      t.boolean :walk_score
      t.belongs_to :profile, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
