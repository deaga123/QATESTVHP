describe("Create Reservation - Possitive Test", () => {
  beforeEach(() => {
    // Bersihkan cookies dan cache sebelum setiap test
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it("TC-FO-FIT-001", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.get('[data-cy="btn-add-reservation"] > .q-btn__wrapper > .q-btn__content > img', { timeout: 10000 }).should("be.visible").click();
    // Klik dropdown untuk memilih tamu
    cy.get('[data-cy="reservation-form-input"]').click().wait(2000);
    // Pilih tipe reservasi dari daftar
    // Klik 'FIT' di dropdown
    cy.contains(".q-item__label", "F I T").click();
    // Tunggu 2 detik (2000ms)
    cy.wait(2000);
    cy.get('[data-cy="table-guest-profile"]').click();
    cy.wait(2000);
    // Klik tombol Continue
    cy.contains("button", "Continue").click();
    // Klik tombol Show Rate
    cy.get('[data-cy="btn-show-rate"] > .q-btn__wrapper > .q-btn__content > .block').click();
    cy.wait(1000);
    // Klik harga pada baris kedua dan kolom kedua di tabel
    cy.get(":nth-child(90) > :nth-child(2)").click();
    cy.wait(2000);
    // Klik tombol Book Now
    cy.get('[data-cy="btn-book-now"] > .q-btn__wrapper > .q-btn__content > .block').should("be.visible").click();
    cy.wait(2000);
    cy.get('[data-cy="btn-create-reservation"] > .q-btn__wrapper').click();
    cy.wait(2000);
    cy.contains("Successfully save reservation").should("be.visible").wait(2000);
  });
  it("TC-FO-FIT-002", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();
    cy.wait(2000);
    cy.get('[data-cy="guest-name-row"]').contains("[INDIVIDUAL RESERVATION]").closest("tr").find('[data-cy="btn-more-option"]').click().wait(3000);
    cy.get('[data-cy="reservation-option"]', { timeout: 10000 }).should("exist").click();
    cy.get('[data-cy="cancel-reservation-option"]').click().wait(1000);
    cy.get('[data-cy="cancel-this-reservation-option"]').click();
    cy.get('[data-autofocus="true"] > .q-btn__wrapper > .q-btn__content').click();
    cy.get('[data-cy="cancel-reason-select"]').click().wait(2000);
    cy.contains(".q-item__label", "NO SHOW").click();
    cy.get('[data-cy="btn-ok-select-reason"] > .q-btn__wrapper').click().wait(1000);
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.contains("Successfully Canceled Reservation").should("be.visible").wait(2000);
  });
  it("TC-FO-Comp-001", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.get('[data-cy="btn-add-reservation"] > .q-btn__wrapper > .q-btn__content > img', { timeout: 10000 }).should("be.visible").click();
    // Klik dropdown untuk memilih tamu
    cy.get('[data-cy="reservation-form-input"]').click().wait(2000);
    // Pilih tipe reservasi dari daftar
    // Klik 'FIT' di dropdown
    cy.contains(".q-item__label", "Company").click().wait(2000);
    cy.get('[data-cy="name-input"]').type("*Bea");
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content > .q-icon').click().wait(1000);
    cy.get(':nth-child(1) > [data-cy="table-guest-profile"]').click();
    cy.get('[data-cy="btn-continue"] > .q-btn__wrapper').click().wait(1000);
    cy.get('[data-cy="btn-show-rate"] > .q-btn__wrapper').click().wait(2000);
    cy.get("tbody > :nth-child(3) > :nth-child(2)").click();
    cy.get('[data-cy="btn-book-now"] > .q-btn__wrapper').click().wait(2000);
    cy.get('[data-cy="btn-compliment"] > .q-toggle__inner > .q-toggle__thumb').click();
    cy.get(':nth-child(6) > [data-v-3716aeee=""] > .q-field > .q-field__inner > .q-field__control > .q-field__append > .q-select__dropdown-icon').click().wait(2000);
    cy.contains(".q-item__label", "90 COMPL").click().wait(2000);
    cy.get('[data-cy="btn-create-reservation"] > .q-btn__wrapper').click().wait(2000);
    cy.contains("Successfully save reservation").should("be.visible").wait(2000);
  });
  it("TC-FO-COmp-002", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();
    cy.wait(2000);
    cy.get('[data-cy="guest-name-row"]').contains("Bea Cukai").closest("tr").find('[data-cy="btn-more-option"]').click().wait(3000);
    cy.get('[data-cy="reservation-option"]', { timeout: 10000 }).should("exist").click();
    cy.get('[data-cy="cancel-reservation-option"]').click().wait(1000);
    cy.get('[data-cy="cancel-this-reservation-option"]').click();
    cy.get('[data-autofocus="true"] > .q-btn__wrapper > .q-btn__content').click();
    cy.get('[data-cy="cancel-reason-select"]').click().wait(2000);
    cy.contains(".q-item__label", "NO SHOW").click();
    cy.get('[data-cy="btn-ok-select-reason"] > .q-btn__wrapper').click().wait(1000);
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.contains("Successfully Canceled Reservation").should("be.visible").wait(2000);
  });
  it("TC-FO-TA-001", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.get('[data-cy="btn-add-reservation"] > .q-btn__wrapper > .q-btn__content > img', { timeout: 10000 }).should("be.visible").click();
    // Klik dropdown untuk memilih tamu
    cy.get('[data-cy="reservation-form-input"]').click().wait(2000);
    // Pilih tipe reservasi dari daftar
    // Klik 'FIT' di dropdown
    cy.contains(".q-item__label", "Travel Agent").click().wait(2000);
    cy.get('[data-cy="name-input"]').type("*AGODA");
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content > .q-icon').click().wait(1000);
    cy.get(':nth-child(1) > [data-cy="table-guest-profile"]').click();
    cy.get('[data-cy="btn-continue"] > .q-btn__wrapper').click().wait(1000);
    cy.get('[data-cy="btn-show-rate"] > .q-btn__wrapper').click().wait(2000);
    cy.get(":nth-child(74) > :nth-child(2)").click().wait(3000);
    cy.get('[data-cy="btn-book-now"] > .q-btn__wrapper').click().wait(2000);
    cy.get('[data-cy="btn-create-reservation"] > .q-btn__wrapper').click().wait(2000);
    cy.contains("Successfully save reservation").should("be.visible").wait(2000);
  });
  it("TC-FO-TA-002", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();
    cy.wait(2000);
    cy.get('[data-cy="guest-name-row"]').contains("AGODA").closest("tr").find('[data-cy="btn-more-option"]').click().wait(3000);
    cy.get('[data-cy="reservation-option"]', { timeout: 10000 }).should("exist").click();
    cy.get('[data-cy="cancel-reservation-option"]').click().wait(1000);
    cy.get('[data-cy="cancel-this-reservation-option"]').click();
    cy.get('[data-autofocus="true"] > .q-btn__wrapper > .q-btn__content').click();
    cy.get('[data-cy="cancel-reason-select"]').click().wait(2000);
    cy.contains(".q-item__label", "NO SHOW").click();
    cy.get('[data-cy="btn-ok-select-reason"] > .q-btn__wrapper').click().wait(1000);
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.contains("Successfully Canceled Reservation").should("be.visible").wait(2000);
  });

  it("TC-FO-FIT-003", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.get('[data-cy="btn-add-reservation"] > .q-btn__wrapper > .q-btn__content > img', { timeout: 10000 }).should("be.visible").click();
    // Klik dropdown untuk memilih tamu
    cy.get('[data-cy="reservation-form-input"]').click().wait(2000);
    // Pilih tipe reservasi dari daftar
    // Klik 'FIT' di dropdown
    cy.contains(".q-item__label", "F I T").click();
    // Tunggu 2 detik (2000ms)
    cy.wait(2000);
    cy.get('[data-cy="table-guest-profile"]').click();
    cy.wait(2000);
    // Klik tombol Continue
    cy.contains("button", "Continue").click();
    // Klik tombol Show Rate
    cy.get('[data-cy="btn-show-rate"] > .q-btn__wrapper > .q-btn__content > .block').click();
    cy.wait(1000);
    // Klik harga pada baris kedua dan kolom kedua di tabel
    cy.get(":nth-child(90) > :nth-child(2)").click();
    cy.wait(2000);
    // Klik tombol Book Now
    cy.get('[data-cy="btn-book-now"] > .q-btn__wrapper > .q-btn__content > .block').should("be.visible").click().wait(2000);
    cy.get('[data-cy="deposit-amount-input"]').click().wait(2000);
    cy.get('[data-cy="deposit-amount-input"]', { timeout: 10000 }).should("be.visible").click({ force: true });
    cy.get('[data-cy="deposit-amount-input"]').clear({ force: true }).type("500000.00", { force: true });
    cy.get('[data-cy="btn-create-reservation"] > .q-btn__wrapper').click().wait(2000);
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click().wait(2000);
    cy.get('.selected > .right > [data-cy="btn-more-option"]').click().wait(1000);
    cy.get('[data-cy="modify-reservation-option"]').click().wait(2000);
    cy.get('[data-cy="main-reservation-toggle"] > .q-toggle__inner > .q-toggle__thumb').click().wait(1000);
    cy.get('[data-cy="btn-view-detail"] > .q-btn__wrapper').click();
    cy.get('[data-cy="btn-payment-deposit-detail"] > .q-btn__wrapper > .q-btn__content').click().wait(2000);
    cy.get('[data-cy="article-payment-input"]').click().wait(2000);
    cy.contains(".q-item__label", "1 - BCA Visa").click();
    cy.get('[data-v-2a768a73=""] > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > [data-cy="voucher-number-input"]').click();
    cy.get('[data-v-2a768a73=""] > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > [data-cy="voucher-number-input"]').clear().type("1234").wait(2000);
    cy.get('[data-cy="btn-payment"] > .q-btn__wrapper > .q-btn__content').click().wait(2000);
    cy.get('[data-autofocus="true"] > .q-btn__wrapper > .q-btn__content > .block').click();
    cy.get(".q-card__actions > :nth-child(1) > .q-btn__wrapper > .q-btn__content > .block").click();
    cy.get('[data-cy="btn-OK"] > .q-btn__wrapper').click();
    cy.get('[data-cy="btn-create-reservation"] > .q-btn__wrapper').click().wait(1000);
    cy.contains("Successfully save reservation").should("be.visible").wait(2000);
  });

  it("TC-FO-FIT-NEG-001", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click();
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();
    cy.wait(2000);
    cy.get('[data-cy="guest-name-row"]').contains("[INDIVIDUAL RESERVATION]").closest("tr").find('[data-cy="btn-more-option"]').click().wait(3000);
    cy.get('[data-cy="reservation-option"]', { timeout: 10000 }).should("exist").click();
    cy.get('[data-cy="cancel-reservation-option"]').click().wait(1000);
    cy.get('[data-cy="cancel-this-reservation-option"]').click();
    cy.contains("ATTENTION: Deposit Payment exists for this reservartion.").should("be.visible").wait(2000);
  });

  it("TC-FO-FIT-004", () => {
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";

    // Step 1: Clear cookies
    cy.clearCookies();

    // Step 2: Pastikan cookies kosong
    cy.getCookies().should("be.empty");

    // Step 3: Kunjungi halaman login
    cy.visit("https://e1-vhp.com/");

    // Step 4: Login
    cy.get('[data-cy="username-input-login"]').should("be.visible").type(email);
    cy.get('[data-cy="password-input-login"]').type(password);
    cy.get('[data-cy="captcha-input-login"]').type(code);
    cy.get('[data-cy="btn-submit"]').click().wait(2000);

    // Step 5: Navigasi ke modul reservasi
    cy.contains(".column", "Front Office Reception").click().wait(2000);
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();

    // Step 6: Pilih reservasi yang bertipe [INDIVIDUAL RESERVATION]
    cy.wait(2000);
    cy.get('[data-cy="menu-apps-button"] > .q-btn__wrapper > .q-btn__content').click().wait(2000);
    cy.get('[href="/fr/reservation-deposit"]').click().wait(2000);
    cy.get('[data-cy="dropdown-type-of-transaction"]').click().wait(1000);
    cy.contains(".q-item__label", "Deposit Refund").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click().wait(2000);

    cy.get("tbody tr").each(($row) => {
      const cell = $row.find("td").eq(3); // kolom 4 = Reservation Name
      if (cell.text().includes("[INDIVIDUAL RESERVATION]")) {
        cy.wrap($row).find('[data-cy="menu-option"]').scrollIntoView().click();
        cy.get('[data-cy="option-deposit-refund"]').click();
        return false; // stop the loop after first match
      }
    });
    cy.get(':nth-child(4) > [data-v-03e82ee6=""] > .q-field > .q-field__inner > .q-field__control > .q-field__control-container > .q-field__native').click().wait(2000);
    cy.contains(".q-item__label", "BCA Visa").click();
    cy.get(":nth-child(7) > .q-btn > .q-btn__wrapper > .q-btn__content").click();

    // Step 9: Verifikasi munculnya notifikasi deposit payment
    cy.contains("Refund successfull").should("be.visible");
  });

  it("TC-FO-FIT-NEG-002", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();
    cy.wait(2000);
    cy.get('[data-cy="guest-name-row"]').contains("[INDIVIDUAL RESERVATION]").closest("tr").find('[data-cy="btn-more-option"]').click().wait(3000);
    cy.get('[data-cy="check-in-option"]').click().wait(1000);

    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.contains("Deposit not yet settled, check-in not possible").should("be.visible").wait(2000);
  });

  it("TC-FO-TA-NEG-003", () => {
    cy.visit("https://e1-vhp.com/");
    const email = "DW@qcperseus";
    const password = "Cloud@au35";
    const code = "A3b9Z1";
    // Periksa dan tunggu elemen input username/password muncul
    // Isi kolom email
    cy.get('[data-cy="username-input-login"]').type(email); // Parameter email
    // Isi kolom password
    cy.get('[data-cy="password-input-login"]').type(password); // Parameter password
    // Isi kolom kode
    cy.get('[data-cy="captcha-input-login"]').type(code); // Parameter kode
    // Klik tombol login
    cy.get('[data-cy="btn-submit"]').click().wait(2000);
    // Navigasi ke modul reservasi
    // Klik pada menu Front Office Reception
    cy.contains(".column", "Front Office Reception").click();
    cy.get('[data-cy="btn-search"] > .q-btn__wrapper > .q-btn__content').click();
    cy.wait(2000);
    cy.get('[data-cy="guest-name-row"]').contains("AGODA").closest("tr").find('[data-cy="btn-more-option"]').click().wait(3000);
    cy.get('[data-cy="check-in-option"]').click().wait(1000);

    // Tunggu tombol Add Reservation muncul dan terlihat
    cy.contains("Guest Type must be individual guest.").should("be.visible").wait(2000);
  });
});
