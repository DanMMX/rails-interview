class Student < ActiveRecord::Base
  scope :favoritemovie, -> (param) { where('favoritemovie like ?', param) }

  def name
    has_repeated_name? ? "#{firstname} #{lastname[0]}." : firstname
  end

  def movie
    favoritemovie
  end

  def has_repeated_name?
    Student.where(:firstname => self.firstname).count > 1
  end

  def to_builder
    Jbuilder.new do |student|
      student.name name
      student.movie favoritemovie
    end
  end

end
