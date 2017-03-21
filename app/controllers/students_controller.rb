class StudentsController < ApplicationController
  before_action :get_students, only: :index

  def index
    respond_to :html, :json
  end

  def get_students
    if params[:movie].nil?
      @students = Student.all
    else
      @students = Student.favoritemovie(params[:movie])
    end
  end
end
