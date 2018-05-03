Seeing Steam OAuth, I thought it was about profile-attack. (Replacing `claimed_id` to login as other users).

But finally when reading codes in Laravel debugger, I encountered this line of cute code:

`$info = Info::where('id', Auth::id())->update($request->all());`

Obviously the server would take whatever in request and update them into database. So we just inject a `&amount=999` in the POST body at endpoint `http://gogogo.2017.hctf.io/info`. (the column name `amount` was found by accessing `http://gogogo.2017.hctf.io/shop/4`). After that we could just buy the flag.

I now still have doubts for this challenge. What's the point for using OAuth if we don't need that to solve this challenge?
