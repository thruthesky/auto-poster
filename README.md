# auto-poster

Auto poster for site like philgo.com, facebook.com, etc..


# Run


You must pass 'Post write' page for posting on philgo.com

````
node philgo id pw address-to-post
````

ex) on OSX
````
node philgo.js williamtheif moneysteal "/?&module=post&action=write&post_id=lookfor"
````

ex) on Linux
````
$ xvfb-run --server-args="-screen 0 1024x768x24" node --harmony philgo.js williamtheif moneysteal "/?&module=post&action=write&post_id=lookfor"
````



## Facebook

You must pass 'Mobile Page Address' for facebook posting.

````
node facebook id pw mystroy-wall-group-address-to-post
````