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
 * WalletCreateResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2019-08-14T13:51:02.588+02:00[Europe/Oslo]")
public class WalletCreateResponse {
  public static final String SERIALIZED_NAME_WALLET = "wallet";
  @SerializedName(SERIALIZED_NAME_WALLET)
  private String wallet;

  public WalletCreateResponse wallet(String wallet) {
    this.wallet = wallet;
    return this;
  }

   /**
   * Get wallet
   * @return wallet
  **/
  @ApiModelProperty(example = "000D1BAEC8EC208142C99059B393051BAC8380F9B5A2E6B2489A277D81789F3F", value = "")
  public String getWallet() {
    return wallet;
  }

  public void setWallet(String wallet) {
    this.wallet = wallet;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WalletCreateResponse walletCreateResponse = (WalletCreateResponse) o;
    return Objects.equals(this.wallet, walletCreateResponse.wallet);
  }

  @Override
  public int hashCode() {
    return Objects.hash(wallet);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WalletCreateResponse {\n");
    sb.append("    wallet: ").append(toIndentedString(wallet)).append("\n");
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

