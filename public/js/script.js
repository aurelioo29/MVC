$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#judulModalLabel").html("Tambah Data Mahasiswa");
    $(".modal-footer button[type=submit").html("Tambah Data");
  });

  $(".tampilModalUbah").on("click", function () {
    $("#judulModalLabel").html("Ubah Data Mahasiswa");
    $(".modal-footer button[type=submit").html("Ubah Data");
    $(".modal-body form").attr(
      "action",
      "http://localhost/MVC/public/mahasiswa/ubah"
    );
    const id = $(this).data("id");
    $.ajax({
      url: "http://localhost/MVC/public/mahasiswa/getUbah",
      data: { id, id },
      type: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nrp").val(data.nrp);
        $("#email").val(data.email);
        $("#id").val(data.id);
        console.log(data);
      },
    });
  });
});
