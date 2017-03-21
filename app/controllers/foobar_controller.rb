class FoobarController < ApplicationController
  # http://stackoverflow.com/questions/3364492/actioncontrollerinvalidauthenticitytoken
  skip_before_filter :verify_authenticity_token

  def foo
    validity = params['valid']
    if validity == 'true'
      render :text => 'BAR', :status  => 202
    else
      raise "DRRR..."
    end
  end
end
