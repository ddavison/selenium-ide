# Selenium IDE Rewrite  
Prototype Phase

## Usage
> Installation:
>> npm install  
>> npm install -g webpack  
>> webpack
>  
> Chrome:  
>> Navigate to: chrome://extensions/  
>> Enable "Developer Mode" (Checkbox at top-right)  
>> Click the "Load unpacked extension..." button.  
>> Select the "dist" folder in this project that was generated by the "webpack" command above.  
>  
> Development:
>> Do the steps listed above, except run webpack with the "--watch" switch:  
>> webpack --watch  
>> Any changes made will automatically be recompiled into the dist folder  

## Simplified Roadmap  
- [X] Base WebExtension
- [ ] User action recording
- [ ] Import/exporting user actions as JSON
- [ ] Display of recorded user actions
- [ ] User action editing and validation
- [ ] User action playback (browser only)
- [ ] Export user actions as WebDriver tests (Ruby, Python, Java, C#)
