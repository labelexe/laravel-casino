// Copyright 2019 - ScientiaMobile, Inc., Reston, VA
// WURFL Device Detection
// Terms of service:
// https://www.scientiamobile.com/terms-service-wurfl-js-imageengine-be/

var WURFL={"advertised_browser":"","advertised_browser_version":"","advertised_device_os":"","advertised_device_os_version":"","brand_name":"","complete_device_name":"","form_factor":"Desktop","is_app_webview":false,"is_full_desktop":true,"is_mobile":false,"is_robot":false,"is_smartphone":false,"is_smarttv":false,"is_tablet":false,"manufacturer_name":"","marketing_name":"","max_image_height":120,"max_image_width":600,"model_name":"","physical_screen_height":400,"physical_screen_width":400,"pointing_method":"","resolution_height":600,"resolution_width":800};if("WURFLCallback"in window){try{window.WURFLCallback(window.WURFL);}catch(err){console.log("WURFL.js callback function failed: "+err);}}