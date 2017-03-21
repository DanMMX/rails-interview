class StudentsController < ApplicationController
  def index
    if params[:movie].nil?
      @students = Student.all
    else
      @students = Student.favoritemovie(params[:movie])
    end
  end
end
