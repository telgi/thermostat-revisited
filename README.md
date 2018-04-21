# Thermostat

Test driven development of a simple thermostat model.

## Aim

To practice using TDD with Jasmine and building logic with JavaScript.

## Installation

`git clone git@github.com:telgi/thermostat-revisited.git`

## Testing

Run `open SpecRunner.html` to launch Jasmine test suite

## User Stories

```
As a user,
So that I can control the temperature of the room,
I want to have a thermostat that starts at room temperature.

As a user,
So that I can feel warmer when it's cold,
I want to be able to turn the thermostat up to a higher temperature.

As a user,
So that I can feel cooler when it's hot,
I want to be able to turn the thermostat down to a lower temperature.

As a user,
So that I don't accidentally make the room too cold,
I want the thermostat to not allow a temperature below 10 degrees.

As a user,
So that I don't accidentally make the room too hot,
I want the thermostat to not allow a temperature above 32 degrees.

As a user,
So that I can be efficient with my usage,
I want to have a power saving mode that sets the maximum temperature to 25 degrees.

As a user,
So that I do not need to worry about remembering to turn power saving mode on,
I want power saving mode to be on by default.

As a user,
So that I can easily revert my temperature changes,
I want to have a reset button that resets the current temperature to room temperature.

As a user,
So that I can be aware of my current energy usage,
I want to have a display that indicates whether the current usage is low, medium, or high.

As a user,
So that I can check energy usage very quickly,
I want the different levels of usage to have semantically appropriate colours.
```

## Specification

* Thermostat starts at 20 degrees []
* You can increase the temperature with an up function []
* You can decrease the temperature with a down function []
* The minimum temperature is 10 degrees []
* If power saving mode is on, the maximum temperature is 25 degrees []
* If power saving mode is off, the maximum temperature is 32 degrees []
* Power saving mode is on by default []
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage []
* Low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red []
