﻿/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.editorConfig=function(a){a.toolbarGroups=[{name:"basicstyles"},{name:"align"},{name:"styles"},{name:"colors",groups:["colors","cleanup"]},{name:"insert"},{name:"list"},{name:"blocks",groups:["blocks","clipboard"]},{name:"extra",groups:["extra","extradesc"]},{name:"undo"},{name:"document",groups:["tools","mode"]}];a.language=rinlanguage;a.removePlugins=rinautosave;a.removeButtons="Cut,Copy,Paste,Anchor,BGColor,indent,"+rinrmvbut+"";a.removeDialogTabs="link:advanced";a.height=rinheight;a.fontSize_sizes=
"xx-small;x-small;small;medium;large;x-large;xx-large";a.smiley_images=dropdownsmiliesurl.concat(dropdownsmiliesurlmore);a.smiley_descriptions=dropdownsmiliesname.concat(dropdownsmiliesnamemore);a.smiley_name=dropdownsmiliesdes.concat(dropdownsmiliesdesmore);a.smiley_path=smileydirectory;a.smiley_sc=rinsmileysc;a.autosave_saveDetectionSelectors='input[name*\x3d"submit"],input[name*\x3d"savedraft"],input[id*\x3d"quick_reply_submit"],input[name*\x3d"previewpost"]';a.startupMode=rinstartupmode;a.imgurClientId=
rinimgur};