# IntroMessage Plugin
- You must provide NEWS URL in RoBrowser Config when adding this Plugin!
- Requires PluginManager to be able to handle object params (just update it)!
- Your url must match RoBrowser's security. If you use HTTPS this url must also be HTTPS (no mixed content).

## Example RoConfig:

`IntroMessage: { path:'IntroMessage/IntroMessage', pars: { newsUrl: '<YOUR NEWS URL HERE>' } },`

## Example for news html

```
<h1>Welcome to RoBrowser</h1> 
<p class="warning">This is a Warning paragraph! Warn players about something important here if you want! A warning paragraph must contain class="warning" in it's opening P tag </p>
<p>This is a normal paragraph detailing something general information that everyone should know.</p>

<div class="news">
	<h3 class="new" data-id="3">2023.01.27</h3><p>Another news paragraph detailing something exciting new thing</p>
	<h3 class="new" data-id="2">2023.01.26</h3><p>Sample news paragraph containing something awesome</p>
	<h3 class="new" data-id="1">2023.01.24</h3><p>News page added</p>
</div>
```
## Installing
Please use the main [plugin guide](https://github.com/MrAntares/roBrowserLegacy-plugins#readme)
