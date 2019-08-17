/*
 * nano-rpc-api
 * API specification for the [Nano Node RPC API](https://docs.nano.org/commands/rpc-protocol) 
 *
 * The version of the OpenAPI document: 19.0.0-alpha
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * AccountRepresentativeResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-08-17T13:08:44.524+02:00[Europe/Oslo]")
public class AccountRepresentativeResponse {
  public static final String SERIALIZED_NAME_REPRESENTATIVE = "representative";
  @SerializedName(SERIALIZED_NAME_REPRESENTATIVE)
  private String representative;

  public AccountRepresentativeResponse representative(String representative) {
    this.representative = representative;
    return this;
  }

   /**
   * Get representative
   * @return representative
  **/
  @ApiModelProperty(example = "nano_1hzoje373eapce4ses7xsx539suww5555hi9q8i8j7hpbayzxq4c4nn91hr8", value = "")
  public String getRepresentative() {
    return representative;
  }

  public void setRepresentative(String representative) {
    this.representative = representative;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountRepresentativeResponse accountRepresentativeResponse = (AccountRepresentativeResponse) o;
    return Objects.equals(this.representative, accountRepresentativeResponse.representative);
  }

  @Override
  public int hashCode() {
    return Objects.hash(representative);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountRepresentativeResponse {\n");
    sb.append("    representative: ").append(toIndentedString(representative)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

