global["GoogleKey"] = "AIzaSyAaHOtwPxJFy22AcWhvnfA_Vx-WXNmhvBA";
global["GoogleclientId"] = "252799569501-10hkda6361vltj5iaborof19rltpij81.apps.googleusercontent.com";
global["GoogleclientSecret"] = "bvcG9eZRsbLHuBn291wDkEHv";

passport.use(new GoogleStrategy({
        clientId: GoogleclientId,
        clientSecret: GoogleclientSecret,
        callbackURL: global["env"].realHost + "/api/user/loginGoogle",
        accessType: "offline"
    },
    function (accessToken, refreshToken, profile, cb) {
        profile.googleAccessToken = accessToken;
        profile.googleRefreshToken = refreshToken;
        return cb(profile);
    }
));