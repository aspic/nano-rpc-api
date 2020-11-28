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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.client.model.AccountBalanceResponse;

/**
 * AccountsBalancesResponse
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2020-11-28T18:31:13.967+01:00[Europe/Oslo]")
public class AccountsBalancesResponse {
  public static final String SERIALIZED_NAME_BALANCES = "balances";
  @SerializedName(SERIALIZED_NAME_BALANCES)
  private Map<String, AccountBalanceResponse> balances = null;


  public AccountsBalancesResponse balances(Map<String, AccountBalanceResponse> balances) {
    
    this.balances = balances;
    return this;
  }

  public AccountsBalancesResponse putBalancesItem(String key, AccountBalanceResponse balancesItem) {
    if (this.balances == null) {
      this.balances = new HashMap<String, AccountBalanceResponse>();
    }
    this.balances.put(key, balancesItem);
    return this;
  }

   /**
   * Get balances
   * @return balances
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"nano_3e3j5tkog48pnny9dmfzj1r16pg8t1e76dz5tmac6iq689wyjfpi00000000\":{\"balance\":\"10000\",\"pending\":\"10000\"},\"nano_3i1aq1cchnmbn9x5rsbap8b15akfh7wj7pwskuzi7ahz8oq6cobd99d4r3b7\":{\"balance\":\"10000000\",\"pending\":\"0\"}}", value = "")

  public Map<String, AccountBalanceResponse> getBalances() {
    return balances;
  }


  public void setBalances(Map<String, AccountBalanceResponse> balances) {
    this.balances = balances;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountsBalancesResponse accountsBalancesResponse = (AccountsBalancesResponse) o;
    return Objects.equals(this.balances, accountsBalancesResponse.balances);
  }

  @Override
  public int hashCode() {
    return Objects.hash(balances);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountsBalancesResponse {\n");
    sb.append("    balances: ").append(toIndentedString(balances)).append("\n");
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

