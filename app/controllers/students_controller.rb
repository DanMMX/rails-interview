require 'pry'

class StudentsController < ApplicationController
  before_action :get_students, only: :index
  respond_to :html, :json

  def index
    respond_with @students
  end

  def get_students
    if params[:movie].nil?
      @students = Student.all
    else
      @students = Student.favoritemovie(params[:movie])
    end
  end

  def show
    respond_to do |format|
      format.html # show.html.erb
    end
  end
end
