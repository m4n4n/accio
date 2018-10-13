<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>LOGIN</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <style type="text/css">
        .box{
            width:600px;
            margin:0 auto;
        }
    </style>

    </head>
    <body>
        <div class="container box">
            <h3> Login sys </h3>

            @if(isset(Auth::user()->email))
                <script>window.location="/main/successlogin";</script>
            @endif
            @if ($message = Session::get('erro'))
            <div class="alert">
            <button type="button" class="close">x</button>
            <strong>{{ $message }} </strong>
            </div>
            @endif
            @if(count($errors) > 0)
                <div class="alert">
                    @foreach($errors->all() as $error)
                  <li>  {{ $error}} </li>
                  @endforeach
                </div>
            @endif
            <form method="post" action="{{ url('/main/checklogin') }}">
             {{csrf_field() }}

                <label>Email</label>
                    <input type="email" name="email" />
                <label>Password</label>
                    <input type="password" name="password" />

                <input type="submit" name="login" class="btn btn-primary" value="login" />

            </form>
    </body>
</html>