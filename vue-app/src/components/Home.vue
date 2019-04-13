<template>
  <div id="app">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="card border-0">
          <div class="card-header bg-danger">
            <h3 class="text-white">Logowanie</h3>
          </div>
          <div class="card-body">
            <form class="p-3">
              <div class="form-group">
                <div class="row">
                  <div class="col-1">
                    <font-awesome-icon icon="user-tie" size="lg" />
                  </div>
                  <div class="col-11">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Podaj MerchantID"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-1">
                    <font-awesome-icon icon="key" size="lg" />
                  </div>
                  <div class="col-11">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Podaj hasło"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <div class="form-check w-100 mt-1">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    class="form-check-label text-muted mb-2"
                    for="exampleCheck1"
                  >
                    Zapamiętaj
                  </label>
                </div>
                <div>
                  <button type="submit" class="btn btn-danger">Zaloguj</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      message: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  margin-top: 60px;
  -webkit-box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.75);
}

.card-header {
  padding: 20px;
}

.col-1 {
  padding-left: 25px;
  padding-top: 7px;
}
</style>
