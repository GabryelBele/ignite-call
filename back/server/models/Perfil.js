export const salvarPerfilModel = (registrationData) => {
    const stmt = db.prepare(`
      INSERT INTO perfil 
      (name, email, fullName, username, selectedDays, timeRanges, profileImage, aboutYou) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
  
    return new Promise((resolve, reject) => {
      stmt.run(
        registrationData.step1Data.name,
        registrationData.step1Data.email,
        registrationData.step1Data.fullname,
        registrationData.step1Data.username,
        registrationData.step1Data.selectedDays,
        registrationData.step1Data.timeRanges,
        registrationData.step1Data.profileImage,
        registrationData.step1Data.aboutYou,
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve(this);
          }
        }
      );
    });
  };
  