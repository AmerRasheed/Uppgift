
command = "chrome -disable-session-crashed-bubble " & "https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_radio"
Set objBrowser = CreateObject("Wscript.Shell")
objBrowser.Run(command)
'Maximize the Browser Window
Window("nativeclass:=Chrome_WidgetWin_1","regexpwndtitle:= Google Chrome").Maximize
Set objBrowser = Nothing

Set SearchButton = Browser("index:=0").Page("index:=0").WebRadioGroup("xpath:=//INPUT[@id=""html""]").Select
SearchButton.Highlight
SearchButton.Click
Wait(3)
Set objBrowser = Nothing

Browser("index:=0").CloseAllTabs

command = "chrome -disable-session-crashed-bubble " & "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_password"
Set objBrowser = CreateObject("Wscript.Shell")
objBrowser.Run(command)
'Maximize the Browser Window
Window("nativeclass:=Chrome_WidgetWin_1","regexpwndtitle:= Google Chrome").Maximize
Set objBrowser = Nothing

Set SearchField = Browser("index:=0").Page("index:=0").WebEdit("xpath:=//INPUT[@id=""email""]")
SearchField.Highlight
SearchField.Set "Kalle"

Set SearchField = Browser("index:=0").Page("index:=0").WebEdit("xpath:=//INPUT[@id=""pwd""]")
SearchField.Highlight
SearchField.Set "Pelle"
Wait(5)

Browser("index:=0").CloseAllTabs


'Set SearchButton = Browser("index:=0").Page("index:=0").WebButton("xpath:=//DIV/DIV/DIV/FORM/DIV/DIV[@role=""combobox""]/DIV/BUTTON[normalize-space()=""Sök""]")
'SearchButton.Highlight
'SearchButton.Click
'
'
'
'Set objBrowser = Nothing
'
'Set SearchField = Browser("index:=0").Page("index:=0").WebEdit("xpath:=//DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[@role=""combobox""][1]/INPUT[1]")
'SearchField.Highlight
'SearchField.Set "stratocaster"
'
'Set SearchButton = Browser("index:=0").Page("index:=0").WebButton("xpath:=//DIV/DIV/DIV/FORM/DIV/DIV[@role=""combobox""]/DIV/BUTTON[normalize-space()=""Sök""]")
'SearchButton.Highlight
'SearchButton.Click


'//INPUT[@id="css"] 


'command = "chrome -disable-session-crashed-bubble " & " https://www.blocket.se/stockholm?ca=11"
'Set objBrowser = CreateObject("Wscript.Shell")
'objBrowser.Run(command)
''Maximize the Browser Window
'Window("nativeclass:=Chrome_WidgetWin_1","regexpwndtitle:= Google Chrome").Maximize
'
'Set objBrowser = Nothing
'
'Set SearchField = Browser("index:=0").Page("index:=0").WebEdit("xpath:=//DIV[1]/DIV[1]/DIV[1]/FORM[1]/DIV[1]/DIV[@role=""combobox""][1]/INPUT[1]")
'SearchField.Highlight
'SearchField.Set "stratocaster"
'
'Set SearchButton = Browser("index:=0").Page("index:=0").WebButton("xpath:=//DIV/DIV/DIV/FORM/DIV/DIV[@role=""combobox""]/DIV/BUTTON[normalize-space()=""Sök""]")
'SearchButton.Highlight
'SearchButton.Click

