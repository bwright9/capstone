class AddSectionsToVisitPreferences < ActiveRecord::Migration
  def change
    add_column :visit_preferences, :food, :boolean, default: false
    add_column :visit_preferences, :drinks, :boolean, default: false
    add_column :visit_preferences, :coffee, :boolean, default: false
    add_column :visit_preferences, :shops, :boolean, default: false
    add_column :visit_preferences, :arts, :boolean, default: false
    add_column :visit_preferences, :outdoors, :boolean, default: false
    add_column :visit_preferences, :sights, :boolean, default: false
  end
end
