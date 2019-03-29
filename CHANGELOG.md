# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.6] - 2019-03-29

### Changed

- Added `off` function for channel object returned after joining a station. Allows to remove event listeners bound to `on` function

### Fixed

- Fixed import for phoenix channels socket

## [0.2.5] - 2019-03-27

### Fixed

- Errors that cannot be fixed by refresh-retry middleware are actually thrown instead of crashing now

## [0.2.4] - 2019-03-27

### Changed

- Errors handled in wrap function are now returned instead of being left unhandled

## [0.2.3] - 2019-03-27

### Fixed

- Issue with regenerator runtime is fixed by removing async/await usage

## [0.2.0] - 2019-03-27

### Added

- Client is now isomorphic an can run on browser and server without configuration changes

### Changed

- Babel polyfill only imports what is required with the `useBuiltIns` settings

## [0.1.4] - 2019-03-01

### Added

- Add endpoint for checking if current user is following a specific staton

## [0.1.3] - 2019-03-01

### Fixed

- Endpoints added from `0.1.2` were not present in package

## [0.1.2] - 2019-02-26

### Added

- Add endpoints for `/me` resources from core-api
