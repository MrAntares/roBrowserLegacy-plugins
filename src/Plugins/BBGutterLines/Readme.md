# BBGutterLines plugin
When using Bowling Bash, the game displays "Land Protector" effect tiles on the gutter lines to help proper positioning.

Only use if the server's config is set to `bowling_bash_area: 0  // 0: Use official gutter line system`.
### Configurable constants:
```js
	const C_EFFECT_SIZE        = 14;      // Radius to check around the player
	const C_EFFECT_ID          = 242;     // Land Protector effect
	const C_EFFECT_AID_PREFIX  = 'BBGL_'; // Effect AID prefix to avoid conflict with regular effects
```

### What are gutter lines?
Gutter lines are Bowling Bash specific coordinates on every map, where Bowling Bash becomes a single target hit. Between these lines Bowling Bash can hit multiple enemies (if they stand next to each other).
The gutter line coordinates are every `x` and `y` value that is divisible by `40` and the next `5` values. Meaning: `40->45`, `80->85`, `120->125`... If you stand on any of these `x` or `y` coordinates, your Bowling Bash won't hit multiple enemies. Enemies pushed into these coordinates will not spread Bowling Bash damage further to other enemies either. The gutter lines effectively create a barrier, so Bowling Bash can't spread to the entire map (given the right amount of enemies).
## Installing
Please use the main [plugin guide](https://github.com/MrAntares/roBrowserLegacy-plugins#readme)
