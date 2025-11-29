<!-- DO NOT EDIT -->

<script>
import FormatObject from "./components/FormatObject.vue";

export default {
  name: "App",
  components: { FormatObject },
  data() {
    return {
      obj: { 
        name: "Simple object",
        age: 18 
      },
      arr: [1.5, "horse", false],
      val: true,
      complex_obj_1: {
        name: "Parent",
        age: 32,
        children: [
          { name: "Child-1", age: 12 },
          { name: "Child-2", age: 4 }
        ]
      },
      complex_obj_2: {
        name: "Very complex object",
        arr: [true, "a", -5.3, 
          { fruit: "apple", price: 2.45 }
        ],
        flag: true,
        another_obj: { name: "Child object", level: 2 }
      },
      complex_arr: [
        "Complex array",
        31,
        { fruit: "apple", color: "red" },
        ["nested array", { name: "Yet another object" }]
      ],
      empty_obj: {},
      empty_arr: []
    };
  }
};
</script>

<template>
  <div id="app">
    <p><strong>Simple object (displayed as unordered list)</strong></p>
    <FormatObject :data="obj" />

    <p><strong>Simple array (displayed as unordered list)</strong></p>
    <FormatObject :data="arr" />

    <p><strong>Literal value (displayed as plain text)</strong></p>
    <FormatObject :data="val" />

    <p><strong>Complex object 1</strong></p>
    <FormatObject :data="complex_obj_1" />

    <p><strong>Complex object 2</strong></p>
    <FormatObject :data="complex_obj_2" />

    <p><strong>Complex array</strong></p>
    <FormatObject :data="complex_arr" />

    <p><strong>Empty object</strong></p>
    <FormatObject :data="empty_obj" />

    <p><strong>Empty array</strong></p>
    <FormatObject :data="empty_arr" />
  </div>
</template>

<style scoped></style>

<!-- END OF DO NOT EDIT -->